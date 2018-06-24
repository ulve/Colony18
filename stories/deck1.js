import { createChoice } from "../choice";
import { createStory } from "../story";
import { setResolution } from "../resolution";
/*
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
  "Ingenjörerna har tydligen kommenderat arbetare till att göra uppgifter som dom själva tyvker dom är för upptagna (viktiga) att göra. Arbetarna har börjat klaga för kvaliten på deras arbete har börjat lida.",
  createChoice(
    "Ingenjörerna har inga som helst mandat att göra detta. Det upphör genast.",
    s => setResolution("Ingenjörerna är inte nöjda med valet.", s)
  ),
  createChoice("Arbetarna kan gott hjälpa till", s =>
    setResolution("Ingenjörerna tycker att du gjort ett klokt val", s)
  ),
  createChoice("Vad håller Ingenjörerna på med som kräver allt det här?", s => {
    const s2 = addStory(ing1, s);
    return setResolution("Du sätter en säkerhetsvakt på att underslja", s2);
  })
);

const ing1 = createStory(
  "Säkerhetsvakten har gjort ett stort genombrott. Det verkar som om Ingenjörerna i hemlighet tillverkar saker och säljer till folk på basen för egen vinnings skull.",
  createChoice("Det här är inte bra. Fortsätt samla fakta.", s => {
    const s2 = addArtifact("bevis mot Ingenjörerna", s);
    const s3 = addStory(ing2, s2);
    return setResolution("Du samlar bevis, hoppas det ger något.", s3);
  }),
  createChoice(
    "Konfrontera Ingenjörerna",
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
*/

// Eng vs Work
const eng_vs_work_1_text =
  "Ingenjörerna har fått nog. Arbetarna respekterar inte redskapen som dom tillverkat. Dom används vårdslöst och allt underhåll av prylarna börjar ta så mycket tid ur det redan ansträngda schemat att det inte längre är hållbart. Hur vill du schemalägga det här?";
const eng_vs_work_1_choice_1 = createChoice(
  "Dra in privilegier för misskött utrustning.",
  s =>
    setResolution(
      "Arbetarna verkar inte ta det väl men utrustningen behålls i bättre skick.",
      s
    )
);
const eng_vs_work_1_choice_2 = createChoice(
  "Dra ner på utveklingstaken för Ingenjörerana så dom hinner hålla underhållet i skick.",
  s =>
    setResolution(
      "Det märks tydligt att det blir mindre effektivt. Om det är missnöjda ingenjörer eller eller på att det verkligen tar sån tid är svårt att bedömma.",
      s
    )
);
const eng_vs_work_1_choice_3 = createChoice(
  "Låt sakerna gå sönder. Arbetarna får sin tilldelade reparationstid, det är allt. Är maskinerna trasiga får dom sköta jobbet för hand.",
  s =>
    setResolution(
      "Saker går sönder till en början. När nog grejer är trasiga och arbetarna inser att det inte var ett skämt så lugnar dom ner sig omän missnöjda.",
      s
    )
);
const eng_vs_work_1 = createStory(
  eng_vs_work_1_text,
  eng_vs_work_1_choice_1,
  eng_vs_work_1_choice_2,
  eng_vs_work_1_choice_3
);

const eng_vs_work_2_text =
  "Ingenjörerna har jobbat hårt på senaste tiden och behvöer tillåtelse att ta igen det med ledig tid. Arbetarna tycker inte det är rättvist då dom anser sig ha jobbat hårt men det finns ingen chans att kunna ge arbetarna ledigt då kolonin är underbemannad och skörden måste fortgå. Hur vill du sköta det här?";
const eng_vs_work_2_choice_1 = createChoice(
  "Vi har bara råd att låta ett team ta ledigt. Det får bli ingenjörerna.",
  s =>
    setResolution("Ingengörerna blir så klart glada men arbetarna mummlar.", s)
);
const eng_vs_work_2_choice_2 = createChoice(
  "Om inte alla kan ta igen sig så får ingen vara ledig. Tillbaks till jobbet!",
  s =>
    setResolution(
      "Det är kanske för det bästa, ingen blir glad men det känns rättvist.",
      s
    )
);
const eng_vs_work_2_choice_3 = createChoice(
  "Båda får ta ledigt. Vi får leva på dom reserver vi har. Ni jobbar nog upp dom igen när alla fått vila lite.",
  s =>
    setResolution(
      "Du vet inte om det var ett bra val. Mest troligt inte men efte det här måste alla vara nöjda?",
      s
    )
);
const eng_vs_work_2 = createStory(
  eng_vs_work_2_text,
  eng_vs_work_2_choice_1,
  eng_vs_work_2_choice_2,
  eng_vs_work_2_choice_3
);

const eng_vs_work_3_text =
  "Ingenjörerna vill skrota ett av arbetarnas projekt för att kunna ägna mer tid åt att bygga forsningsutrustning. Dom hävdar att det kommer att göra fortsatt arbete lättare men det innebär också att arbetarna får jobba hårdare ett tag framöver för en osäker utdelning då den nya utrustningen kanske inte ens fungerar för deras syften. Hur skall vi agera?";
const eng_vs_work_3_choice_1 = createChoice(
  "Den som vågar vinner. Skrota och så hoppas vi på att det går bra! Då blir alla nöjda.",
  s =>
    setResolution(
      "Ingen kommer ihåg en fegis. Det gick som det gick. Hur skall vi sköta testen när man kan returnera olika? Köra 100 stycken med alla värden eller? Det låter rimligt.",
      s
    )
);
const eng_vs_work_3_choice_2 = createChoice(
  "Nej det är för riskabelt. Lägg ner den här forskningen. Mycket för riskabelt!",
  s =>
    setResolution(
      "Det hade aldrig gått bra. Smart val! Kanske. Arbetarna slipper i vart fall slita ut sig.",
      s
    )
);
const eng_vs_work_3_choice_3 = createChoice(
  "Okej vi går långsamt frammåt här. Inget skrotas men vi tar längre tid på oss och hoppas att det går bra.",
  s =>
    setResolution(
      "Det här tjänar alla på. Okej det går inte så fort och alla måste jobba mer men i framtiden kommer det att helt klart ha varit rätt val.",
      s
    )
);
const eng_vs_work_3 = createStory(
  eng_vs_work_3_text,
  eng_vs_work_3_choice_1,
  eng_vs_work_3_choice_2,
  eng_vs_work_3_choice_3
);

const eng_vs_work_4_text =
  "Ingenjörerna har lust att ta hjälp av ett arbetslag med arbetare. Dom vill genomföra en expedition för att kolla om det är möjligt att bryta mineraler nära ytan och använda detta för att kunna effektivare tillverka reservdelar och ny utrustning. Projektet anses dock som farligt av arbetarna och dom känner att även om dom har personal över nu så är risken för stor att någon skadar sig. Hur skalld om göra?";

const eng_vs_work_4_choice_1 = createChoice(
  "Det låter farligt. Vi kan inte riskera att någon skadar sig. Vi får klara oss utan.",
  s =>
    setResolution(
      "Ingenjörerna förstår in men bara en skadad arbetare hade ställt till allt. Vi är kritiskt underbemannade.",
      s
    )
);
const eng_vs_work_4_choice_2 = createChoice(
  "Finns det några frivilliga? I så fall så kör vi. Det går nog bra även om vi inte får ihop ett fullt arbetslag.",
  s =>
    setResolution(
      "Okej det blir inte ett fullt arbetslag. Lite riskablare men det gick som det gick.",
      s
    )
);
const eng_vs_work_4_choice_3 = createChoice(
  "Vi är så illa tvugna. Ta ett arbetslag och sköt det snyggt?",
  s =>
    setResolution(
      "Arbetarna mumlar om att vara försöktdjur men det är inget att göra åt. Dom tjänar lika mycket som någon annan på det här. Bara det går bra.",
      s
    )
);
const eng_vs_work_4 = createStory(
  eng_vs_work_4_text,
  eng_vs_work_4_choice_1,
  eng_vs_work_4_choice_2,
  eng_vs_work_4_choice_3
);
const eng_vs_work_5_text =
  "Ingenjörerna har en ny prototyp för nya skördemaskiner. Det finns dock inget sätt att testa dom utan att helt montera ner en hel farms skörderobotar. Om man väntar och gör det just efter nästa skörd så gör man minimal skada men det kommer även att dröja innan man kommer i full skala. Gör man det nu så kommer man helt säkert sabotera en hel skörd men man kommer i produktion snabbare. Allt det här om det ens fungerar. Hur skall vi gå till väga?";
const eng_vs_work_5_choice_1 = createChoice(
  "Montera ner. Lite mindre mat nu är ingen fara ifall vi får högre utdelning sen.",
  s =>
    setResolution(
      "Vi har ändå överskott nu. Bara att utnyttja det för lite snabba segrar.",
      s
    )
);
const eng_vs_work_5_choice_2 = createChoice(
  "Nej. Vi vet vad vi har nu. Finns ingen anledning att chansa.",
  s =>
    setResolution(
      "Ingenjörerna är inte så heta på kasta bort sin utrustning. Du får en stabil skör men var det värt det?",
      s
    )
);
const eng_vs_work_5_choice_3 = createChoice(
  "Vänta tills glappet mellan skördarna. Det är det sundaste. Vi förlorar minst men tjänar lika mycket över tid.",
  s =>
    setResolution(
      "Än en gång ett mellanting. Ingen blir arg, ingen blir särskilt glad.",
      s
    )
);
const eng_vs_work_5 = createStory(
  eng_vs_work_5_text,
  eng_vs_work_5_choice_1,
  eng_vs_work_5_choice_2,
  eng_vs_work_5_choice_3
);

// // Eng vs Sci
// const eng_vs_sci_1 = "";
// const eng_vs_sci_2 = "";
// const eng_vs_sci_3 = "";
// const eng_vs_sci_4 = "";
// const eng_vs_sci_5 = "";

// // Sic vs Work
// const sci_vs_work_1 = "";
// const sci_vs_work_2 = "";
// const sci_vs_work_3 = "";
// const sci_vs_work_4 = "";
// const sci_vs_work_5 = "";

// Air vs Food
// Air vs Mets
// Food vs Mets

const deck = [
  eng_vs_work_1,
  eng_vs_work_2,
  eng_vs_work_3,
  eng_vs_work_4,
  eng_vs_work_5
];

export { deck };
