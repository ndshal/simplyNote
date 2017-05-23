import * as TagAPIUtil from '../util/tag_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_SINGLE_TAG = 'RECEIVE_SINGLE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags
});

export const receiveSingleTag = tag => ({
  type: RECEIVE_SINGLE_TAG,
  tag
});

export const removeTag = id => ({
  type: REMOVE_TAG,
  id
});

export const fetchAllTags = () => dispatch => (
  TagAPIUtil.fetchAllTags()
    .then(tags => dispatch(receiveAllTags(tags)))
);

export const createTag = tag => dispatch => (
  TagAPIUtil.createTag(tag)
    .then(
      tag => dispatch(receiveSingleTag(tag)),
      err => dispatch(receiveErrors('createForm', err.responseJSON))
    )
);

export const deleteTag = id => dispatch => (
  TagAPIUtil.deleteTag(id)
    .then(tag => dispatch(removeTag(tag.id)))
);
