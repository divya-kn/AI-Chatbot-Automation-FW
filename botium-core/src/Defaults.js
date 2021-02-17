const Capabilities = require('./Capabilities')
const Source = require('./Source')

module.exports = {
  Capabilities: {
    [Capabilities.PROJECTNAME]: 'Botium Project',
    [Capabilities.TESTSESSIONNAME]: 'Botium Test Session',
    [Capabilities.TEMPDIR]: 'botiumwork',
    [Capabilities.CLEANUPTEMPDIR]: true,
    [Capabilities.WAITFORBOTTIMEOUT]: 10000,
    [Capabilities.SIMULATE_WRITING_SPEED]: false,
    [Capabilities.SIMPLEREST_PING_RETRIES]: 6,
    [Capabilities.SIMPLEREST_PING_TIMEOUT]: 10000,
    [Capabilities.SIMPLEREST_PING_VERB]: 'GET',
    [Capabilities.SIMPLEREST_PING_UPDATE_CONTEXT]: true,
    [Capabilities.SIMPLEREST_STOP_TIMEOUT]: 10000,
    [Capabilities.SIMPLEREST_STOP_VERB]: 'GET',
    [Capabilities.SIMPLEREST_POLL_VERB]: 'GET',
    [Capabilities.SIMPLEREST_POLL_INTERVAL]: 1000,
    [Capabilities.SIMPLEREST_POLL_TIMEOUT]: 10000,
    [Capabilities.SIMPLEREST_POLL_UPDATE_CONTEXT]: true,
    [Capabilities.SIMPLEREST_METHOD]: 'GET',
    [Capabilities.SIMPLEREST_TIMEOUT]: 10000,
    [Capabilities.SIMPLEREST_EXTRA_OPTIONS]: {},
    [Capabilities.SIMPLEREST_STRICT_SSL]: true,
    [Capabilities.SIMPLEREST_INBOUND_UPDATE_CONTEXT]: true,
    [Capabilities.SIMPLEREST_CONTEXT_MERGE_OR_REPLACE]: 'MERGE',
    [Capabilities.SCRIPTING_TXT_EOL]: '\n',
    [Capabilities.SCRIPTING_XLSX_EOL_WRITE]: '\r\n',
    [Capabilities.SCRIPTING_XLSX_HASHEADERS]: true,
    [Capabilities.SCRIPTING_CSV_SKIP_HEADER]: true,
    [Capabilities.SCRIPTING_CSV_QUOTE]: '"',
    [Capabilities.SCRIPTING_CSV_ESCAPE]: '"',
    [Capabilities.SCRIPTING_NORMALIZE_TEXT]: true,
    [Capabilities.SCRIPTING_ENABLE_MEMORY]: false,
    [Capabilities.SCRIPTING_ENABLE_MULTIPLE_ASSERT_ERRORS]: false,
    [Capabilities.SCRIPTING_MATCHING_MODE]: 'wildcardIgnoreCase',
    [Capabilities.SCRIPTING_UTTEXPANSION_MODE]: 'all',
    [Capabilities.SCRIPTING_UTTEXPANSION_RANDOM_COUNT]: 1,
    [Capabilities.SCRIPTING_UTTEXPANSION_NAMING_MODE]: 'justLineTag',
    [Capabilities.SCRIPTING_UTTEXPANSION_NAMING_UTTERANCE_MAX]: '16',
    [Capabilities.SCRIPTING_MEMORYEXPANSION_KEEP_ORIG]: false,
    [Capabilities.ASSERTERS]: [],
    [Capabilities.LOGIC_HOOKS]: [],
    [Capabilities.USER_INPUTS]: [],
    [Capabilities.SECURITY_ALLOW_UNSAFE]: true
  },
  Sources: {
    [Source.LOCALPATH]: '.',
    [Source.GITPATH]: 'git',
    [Source.GITBRANCH]: 'master',
    [Source.GITDIR]: '.'
  },
  Envs: {
    IS_BOTIUM_CONTAINER: true
  }
}
