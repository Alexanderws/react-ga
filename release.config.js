module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/Alexanderws/react-ga",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};