import { connect } from 'react-redux';
import { fetchAllNotebooks } from '../../actions/notebooks_actions';
import { sortItemSliceByName } from '../../reducers/selectors';
import NotebookSelector from './notebook_selector';

const mapStateToProps = ({ notebooks }, { value }) => {
  let currentTitle = '';
  if(notebooks.byId[value]) {
    currentTitle = notebooks.byId[value].name;
  } else if ( notebooks.defaultId && notebooks.byId[notebooks.defaultId]) {
    currentTitle = notebooks.byId[notebooks.defaultId].name;
  }

  return {
    notebooks: sortItemSliceByName(notebooks),
    currentTitle
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookSelector);
