import { connect } from 'react-redux';
import PlaylistContent from './view';
import {
  makeSelectUrlsForCollectionId,
  makeSelectNameForCollectionId,
  makeSelectCollectionForId,
  doCreateUnpublishedCollection,
  makeSelectClaimForClaimId,
  makeSelectClaimIsMine,
} from 'lbry-redux';

const select = (state, props) => {
  const claim = makeSelectClaimForClaimId(props.id)(state);
  const url = claim && claim.permanent_url;

  return {
    collection: makeSelectCollectionForId(props.id)(state),
    collectionUrls: makeSelectUrlsForCollectionId(props.id)(state),
    collectionName: makeSelectNameForCollectionId(props.id)(state),
    claim,
    isMine: makeSelectClaimIsMine(url)(state),
  };
};

const perform = dispatch => ({
  createUnpublishedCollection: (name, items, sourceId) =>
    dispatch(doCreateUnpublishedCollection(name, items, sourceId)),
});

export default connect(select, perform)(PlaylistContent);
