// addArtifact :: Artifact -> GameState -> GameState
const addArtifact = (artifact, gameState) =>
  gameState.updateIn(["artifacts"], l => l.push(artifact));

// hasArtifact :: Artifact -> GameState -> Bool
const hasArtifact = (artifact, gameState) =>
  gameState.get("artifacts").includes(artifact);

export { addArtifact, hasArtifact };
