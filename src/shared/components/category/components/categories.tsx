import { useState, useRef, useCallback } from 'react';
import { CategoriesStyled, CategoryDropdownStyled } from './categories.styled';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/icons/arrow-down.svg';
import { ReactComponent as BurgerIcon } from '../../../../assets/icons/burger.svg';
import { categoriesMock } from '../category.constants';
import { CategoryItemType } from '../category.type';
import { useOnClickOutside } from '../../../hooks/use-on-outside-click';

export const Categories = () => {
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

  return (
    <CategoriesStyled className='flex align-center' ref={ref} onClick={() => setIsOpen(!isOpen)}>
      <div className='FL-category-block flex align-center'>
        <BurgerIcon className='FL-category-burger' />
        Categories
        <ArrowDownIcon className='FL-category-arrow' />
      </div>

      {isOpen && (
        <CategoryDropdownStyled>
          {categoriesMock.map(({ id, title, icon }) => {
            return (
              <li
                key={id}
                className='FL-category-item flex align-center'
                onClick={() => handleSelectCategory(title)}
              >
                <img src={icon} alt={title} className='FL-category-item-icon ' />
                {title}
              </li>
            );
          })}
        </CategoryDropdownStyled>
      )}
    </CategoriesStyled>
  );
};
