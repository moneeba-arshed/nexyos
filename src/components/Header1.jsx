import React, { useState } from 'react';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';

const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlignOpen, setIsAlignOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleAlignMenu = () => {
    setIsAlignOpen(!isAlignOpen);
  };

  return (
   <div>
            <h1 style={{ color: 'green' }}>
                GeeksforGeeks</h1>
            <h3>React Suite Dropdown Submenu</h3>
            <Dropdown title="GeeksforGeeks">
                <Dropdown.Item>Database</Dropdown.Item>
                <Dropdown.Menu title="DSA">
                    <Dropdown.Item disabled>C++</Dropdown.Item>
                    <Dropdown.Item>Java</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item >Blockchain Technology</Dropdown.Item>
                <Dropdown.Menu title="Web Technology">
                    <Dropdown.Menu title="React" disabled>
                        <Dropdown.Item >Material UI</Dropdown.Item>
                        <Dropdown.Item>React Suite</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Item>HTML</Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>
        </div>
  );
};

export default Header1;
