import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';
import { openModal } from '../../store/actions/modalActions';

const SignedOutMenu = () => {
  const dispatch = useDispatch();
  return (
    <Menu.Menu position="right">
      {/* <Button
        onClick={() => dispatch(openModal('LoginModal'))}
        primary
        content="Login"
      />
      <Button
        onClick={() => dispatch(openModal('RegisterModal'))}
        content="Register"
        style={{ marginLeft: '0.5em' }}
      /> */}
      <Menu.Item
        name="Login"
        onClick={() => dispatch(openModal('LoginModal'))}
      />
      <Menu.Item
        name="Register"
        onClick={() => dispatch(openModal('RegisterModal'))}
      />
    </Menu.Menu>
  );
};

export default SignedOutMenu;
