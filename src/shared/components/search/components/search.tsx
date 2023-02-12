import { useCallback, useRef, useState } from 'react';
import classes from 'classnames';
import { SearchStyled, SearchWrapperStyled } from './search.styled';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/icons/arrow-down.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg';
import { categoriesMock } from '../../category/category.constants';
import { useOnClickOutside } from '../../../hooks/use-on-outside-click';
import { CategoryItemType } from '../../category/category.type';

export const Search = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Omit<CategoryItemType, 'id'>>(categoriesMock[0]);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const handleSelectCategory = useCallback(
    (title: string) => {
      setSelected({ title });
      setIsOpen(false);
    },
    [setSelected],
  );

  console.log(selected);

  return (
    <SearchWrapperStyled className='FL-search flex-center' ref={ref}>
      <SearchIcon className='FL-search-icon' />
      <SearchStyled placeholder='Searching for...' />
      <div className='FL-allCategories-dropdown flex-center' onClick={() => setIsOpen(!isOpen)}>
        {selected.title} <ArrowDownIcon />
        {isOpen && (
          <ul className='FL-allCategories-dropdown-content flex flex-column'>
            {categoriesMock.map((item) => {
              return (
                <li
                  key={item.id}
                  className={classes('FL-allCategories-dropdown-item', {
                    'active-item': item.title === selected.title,
                  })}
                  onClick={() => handleSelectCategory(item.title)}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </SearchWrapperStyled>
  );
};
