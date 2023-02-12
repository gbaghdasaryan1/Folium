import React, { FC, useEffect } from 'react';
// import { useRecoilValue } from 'recoil';
// import { authAtom } from '../../auth/auth.atoms';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

export const PublicRouteGuard: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const auth = false;

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return <>{children}</>;
};
