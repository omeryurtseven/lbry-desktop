import ClaimListDiscover from './view';

import { connect } from 'react-redux';
import {
  doClaimSearch,
  selectClaimSearchByQuery,
  selectClaimSearchByQueryLastPageReached,
  selectFetchingClaimSearch,
  SETTINGS,
} from 'lbry-redux';
import { selectFollowedTags } from 'redux/selectors/tags';
import { selectBlockedChannels } from 'redux/selectors/blocked';
import { doToggleTagFollowDesktop } from 'redux/actions/tags';
import { makeSelectClientSetting, selectLanguage } from 'redux/selectors/settings';

const select = state => ({
  followedTags: selectFollowedTags(state),
  claimSearchByQuery: selectClaimSearchByQuery(state),
  claimSearchByQueryLastPageReached: selectClaimSearchByQueryLastPageReached(state),
  loading: selectFetchingClaimSearch(state),
  showNsfw: makeSelectClientSetting(SETTINGS.SHOW_MATURE)(state),
  hideReposts: makeSelectClientSetting(SETTINGS.HIDE_REPOSTS)(state),
  languageSetting: selectLanguage(state),
  hiddenUris: selectBlockedChannels(state),
  searchInLanguage: makeSelectClientSetting(SETTINGS.SEARCH_IN_LANGUAGE)(state),
});

const perform = {
  doClaimSearch,
  doToggleTagFollowDesktop,
};

export default connect(select, perform)(ClaimListDiscover);
