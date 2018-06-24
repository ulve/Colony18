import { success } from "../util";
import { createChoice } from "../choice";
import { createStory, addStory } from "../story";
import { addArtifact } from "../artifact";
import { setResolution } from "../resolution";

const test1 = createStory(
  "Du blir informerad av ett syreläckage. Efter vidare utredning visar det sig att arbetarna tagit extra syre för att skynda på odlingen lite. Det är inte så effektivt enligt vetenskapsmännen men någon form av resultat ger det i vart fall.",
  createChoice("Återställ som det varit tidigare", s =>
    setResolution("Arbetarna verkar besvikna, ingen lyssnar på dom.", s)
  ),
  createChoice("Mer mat är mer mat, vi har ändå syre så vi klarar oss", s =>
    setResolution(
      "Vetenskapsmännen är inte imponerade av din slutledningsförmåga",
      s
    )
  ),
  createChoice(
    "Sätt vetenskapsmännen på att utreda ett sätt att göra det hela mer effektivt",
    s => {
      if (success(30))
        return setResolution(
          "Dom gör ett bra arbete, syreförbrukningen är minimal",
          s
        );
      else
        return setResolution(
          "Det hela var ett misstag, efter en massa förlorad syre så tvingas experimentet med maten att sluta",
          s
        );
    }
  )
);

const test2 = createStory(
  "Ingengörerna har tydligen kommenderat arbetare till att göra uppgifter som dom själva tyvker dom är för upptagna (viktiga) att göra. Arbetarna har börjat klaga för kvaliten på deras arbete har börjat lida.",
  createChoice(
    "Ingengörerna har inga som helst mandat att göra detta. Det upphör genast.",
    s => setResolution("Ingengörerna är inte nöjda med valet.", s)
  ),
  createChoice("Arbetarna kan gott hjälpa till", s =>
    setResolution("Ingengörerna tycker att du gjort ett klokt val", s)
  ),
  createChoice("Vad håller ingengörerna på med som kräver allt det här?", s => {
    const s2 = addStory(ing1, s);
    return setResolution("Du sätter en säkerhetsvakt på att underslja", s2);
  })
);

const ing1 = createStory(
  "Säkerhetsvakten har gjort ett stort genombrott. Det verkar som om ingengörerna i hemlighet tillverkar saker och säljer till folk på basen för egen vinnings skull.",
  createChoice("Det här är inte bra. Fortsätt samla fakta.", s => {
    const s2 = addArtifact("bevis mot ingengörerna", s);
    const s3 = addStory(ing2, s2);
    return setResolution("Du samlar bevis, hoppas det ger något.", s3);
  }),
  createChoice(
    "Konfrontera ingengörerna",
    s =>
      setResolution(
        "Du har inte nog med bevis, stämningen blir dålig men dom slutar i var fall att tillverka saker. Tror du.",
        s
      ),
    createChoice("Låt dom vara, det är inte värt det!", s => {
      const s2 = addStory(ing2, s);
      return setResolution("", s2);
    })
  )
);

const ing2 = createStory("");

// Eng vs Work
const eng_vs_work_1 =
  "Ingengörerna har fått nog. Arbetarna respekterar inte redskapen som dom tillverkat. Dom används vårdslöst och allt underhåll av prylarna börjar ta så mycket tid ur det redan ansträngda schemat att det inte längre är hållbart. Hur vill du schemalägga det här?";
// 1: Dra in privilegier för misskött utrustning
// 2: Dra ner på utveklingstaken för ingengörerana så dom hinner hålla underhållet i skick
// 3: Låt sakerna gå sönder. Arbetarna får sin tilldelade reparationstid, det är allt. Är maskinerna trasiga får dom sköta jobbet för hand.

const eng_vs_work_2 =
  "Ingengörerna har jobbat hårt på senaste tiden och behvöer tillåtelse att ta igen det med ledig tid. Arbetarna tycker inte det är rättvist då dom anser sig ha jobbat hårt men det finns ingen chans att kunna ge arbetarna ledigt då kolonin är underbemannad och skörden måste fortgå. Hur vill du sköta det här?";
// 1: Vi har bara råd att låta ett team ta ledigt. Det får bli ingengörerna.
// 2: Om inte alla kan ta igen sig så får ingen vara ledig. Tillbaks till jobbet!
// 3: Båda får ta ledigt. Vi får leva på dom reserver vi har. Ni jobbar nog upp dom igen när alla fått vila lite.

const eng_vs_work_3 =
  "Ingengörerna vill skrota ett av arbetarnas projekt för att kunna ägna mer tid åt att bygga forsningsutrustning. Dom hävdar att det kommer att göra fortsatt arbete lättare men det innebär också att arbetarna får jobba hårdare ett tag framöver för en osäker utdelning då den nya utrustningen kanske inte ens fungerar för deras syften. Hur skall vi agera?";
// 1: Den som vågar vinner. Skrota och så hoppas vi på att det går bra! Då blir alla nöjda.
// 2: Nej det är för riskabelt. Lägg ner den här forskningen. Den låter för riskabel.
// 3: Okej vi går långsamt frammåt här. Inget skrotas men vi tar längre tid på oss och hoppas att det går bra.
const eng_vs_work_4 =
  "Ingengörerna har lust att ta hjälp av ett arbetslag med arbetare. Dom vill genomföra en expidition för att kolla om det är möjligt att bryta mineraler nära ytan och använda detta för att kunna effektivare tillverka reservdelar och ny utrustning. Projektet anses dock som farligt av arbetarna och dom känner att även om dom har personal över nu så är risken för stor att någon skadar sig. Hur skalld om göra?";
// 1: Det låter farligt. Vi kan inte riskera att någon skadar sig. Vi får klara oss utan.
// 2: Finns det några frivilliga? I så fall så kör vi. Det går nog bra även om vi inte får ihop ett fullt arbetslag.
// 3: Vi är så illa tvugna. Ta ett arbetslag och sköt det snyggt?

const eng_vs_work_5 =
  "Ingengörerna har en ny prototyp för nya skördemaskiner. Det finns dock inget sätt att testa dom utan att helt montera ner en hel farms skörderobotar. Om man väntar och gör det just efter nästa skörd så gör man minimal skada men det kommer även att dröja innan man kommer i full skala. Gör man det nu så kommer man helt säkert sabotera en hel skörd men man kommer i produktion snabbare. Allt det här om det ens fungerar. Hur skall vi gå till väga?";
// 1: Montera ner. Lite mindre mat nu är ingen fara ifall vi får högre utdelning sen.
// 2: Nej. Vi vet vad vi har nu. Finns ingen anledning att chansa.
// 3: Vänta tills glappet mellan skördarna. Det är det sundaste. Vi förlorar minst men tjänar lika mycket över tid.

// Eng vs Sci
const eng_vs_sci_1 = "";
const eng_vs_sci_2 = "";
const eng_vs_sci_3 = "";
const eng_vs_sci_4 = "";
const eng_vs_sci_5 = "";

// Sic vs Work
const sci_vs_work_1 = "";
const sci_vs_work_2 = "";
const sci_vs_work_3 = "";
const sci_vs_work_4 = "";
const sci_vs_work_5 = "";

// Air vs Food
// Air vs Mets
// Food vs Mets

export { test1 };
