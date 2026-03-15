/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2022-08-21T12:08:59+02:00
 * @Copyright: Technology Studio
**/

const automaticCommitPattern = /^chore\(release\):.*\[skip ci\]/

const commitlintConfig = {
  extends: [
    '@commitlint/config-conventional'
  ],

  rules: {
    'body-max-line-length': [0],
  },

  ignores: [
    commitMsg => automaticCommitPattern.test(commitMsg)
  ]
}

module.exports = commitlintConfig
