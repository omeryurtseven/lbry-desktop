import { connect } from 'react-redux';
import {
  selectDownloadUrlsCount,
  selectIsFetchingFileList,
  selectMyPurchases,
  selectIsFetchingMyPurchases,
  doPurchaseList,
  selectBuiltinCollections,
  selectMyPublishedCollections,
  selectMyUnpublishedCollections, // should probably distinguish types
  selectSavedCollections,
} from 'lbry-redux';

import LibraryPage from './view';

const select = state => ({
  allDownloadedUrlsCount: selectDownloadUrlsCount(state),
  fetchingFileList: selectIsFetchingFileList(state),
  myPurchases: selectMyPurchases(state),
  fetchingMyPurchases: selectIsFetchingMyPurchases(state),
  builtinCollections: selectBuiltinCollections(state), // select
  publishedCollections: selectMyPublishedCollections(state),
  unpublishedCollections: selectMyUnpublishedCollections(state),
  savedCollections: selectSavedCollections(state),
});

export default connect(select, {
  doPurchaseList,
})(LibraryPage);
