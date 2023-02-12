// import React, { FC, useEffect, useLayoutEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { authAtom } from '../../auth/auth.atoms';
// import { pagesConfig } from '../pages.config';

// type Props = {
//   children: React.ReactNode;
// };

// export const PrivateRouteGuard: FC<Props> = ({ children }) => {
//   const navigate = useNavigate();
//   const auth = useRecoilValue(authAtom);

//   useEffect(() => {
//     if (!auth) {
//       navigate(pagesConfig.signIn.getUrl());
//     }
//   }, [auth]);

//   return <>{!!auth && children}</>;
// };
export {};
