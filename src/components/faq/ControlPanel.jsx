/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  CategoryButtons,
  SearchBar,
  ResultsCounter,
} from '.';
import { Wrapper } from '../common';

const ControlPanel = (props) => {
  const {
    activeCategory,
    uniqueCategories,
    setActiveCategoryHandler,
    searchActive,
    searchQuery,
    searchFocusHandler,
    setSearchHandler,
    numResults,
  } = props;
  return (
    <div
      className="control-panel"
    >
      <Wrapper>
        <div
          className="container"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomStyle: 'solid',
            borderBottomColor: 'divider',
            borderBottomWidth: '2px',
            padding: '50px 0 40px',
          }}
        >
          <div
            className="container"
            sx={{
              marginLeft: 'auto',
              paddingBottom: '2em',
            }}
          >
            <a href="/">← Home</a>
          </div>
          <SearchBar
            searchActive={searchActive}
            searchQuery={searchQuery}
            setSearchHandler={setSearchHandler}
            searchFocusHandler={searchFocusHandler}
          />
          <ResultsCounter
            numResults={numResults}
            hasValue={Boolean(searchQuery !== '')}
          />
          <CategoryButtons
            activeCategory={activeCategory}
            categories={uniqueCategories}
            setActiveCategoryHandler={setActiveCategoryHandler}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default ControlPanel;
