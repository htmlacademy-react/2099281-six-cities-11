import {MouseEvent} from 'react';
import {SortTypesArray, SortTypes} from '../../constants';


function SortForm(): JSX.Element {

  const currentSortType = SortTypes.Popular;

  const handleChange = (evt : MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4" >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--closed`}>
        {SortTypesArray.map((sortType) =>
          (
            <li
              key={sortType}
              className={`places__option  ${sortType === currentSortType ? 'places__option--active' : ''} `}
              tabIndex={0}
              onClick={handleChange}
            >
              {sortType}
            </li>)
        )}
      </ul>
    </form>);
}

export default SortForm;
