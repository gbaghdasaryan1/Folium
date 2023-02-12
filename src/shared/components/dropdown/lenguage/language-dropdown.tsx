import { useState, useRef, useCallback } from 'react';
import { LanguageDropdownContentStyled, LanguageDropdownStyled } from './language-dropdown.styled';
import ArmFLag from '../../../../assets/icons/flags/armenia-flag.png';
import { ReactComponent as ArrowDown } from '../../../../assets/icons/arrow-down.svg';
import { useOnClickOutside } from '../../../hooks/use-on-outside-click';
import { languages, LanguageType } from '../dropdons.constants';

export const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Omit<LanguageType, 'id'>>({
    language: 'Հայերեն',
    flag: ArmFLag,
    alt: 'Հայերեն',
    shortName: 'Arm',
  });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleSelectLanguage = useCallback(
    (language: string, flag: string, alt: string, shortName: string) => {
      setSelected({
        language,
        flag,
        alt,
        shortName,
      });
      setIsOpen(false);
    },
    [setSelected],
  );

  return (
    <LanguageDropdownStyled className='relative' ref={dropdownRef}>
      <div
        className='FL-language-view flex-center'
        ref={contentRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={selected.flag} alt={selected.alt} className='FL-language-dropdown-current-img' />
        <span>{selected.shortName}</span>
        <ArrowDown />
      </div>

      {isOpen && (
        <LanguageDropdownContentStyled>
          {languages.map(({ language, alt, flag, id, shortName }) => {
            return (
              <p
                key={id}
                className='FL-language-item flex-between'
                onClick={() => handleSelectLanguage(language, flag, alt, shortName)}
              >
                {language} <img src={flag} alt={alt} />
              </p>
            );
          })}
        </LanguageDropdownContentStyled>
      )}
    </LanguageDropdownStyled>
  );
};
