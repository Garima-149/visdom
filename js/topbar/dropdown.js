/**
 * Copyright 2017-present, The Visdom Authors
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { useState } from 'react';

const UserDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div style={{ display: 'inline-block', position: 'relative', marginRight: '10px' }}>

      <button
        onClick={toggleDropdown}
        style={{
          background: 'none',
          border: 'none',
          padding: '5px 10px',
          cursor: 'pointer',
          fontSize: '14px', 
          fontWeight: 'bold', 
          color: '#333', 
        }}
      >
        👤 User ▼ 

      </button>

      {isDropdownOpen && (
        <>
          {/* Overlay to close dropdown when clicking outside */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
            }}

            onClick={handleClose}

          />


          {/* Dropdown Menu */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: '100%',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              zIndex: 1001,
              minWidth: '160px',
              marginTop: '8px',
            }}
          >
            <div
              onClick={handleClose}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
                fontSize: '14px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
            >
              👤 Profile
            </div>
            
            <div
              onClick={handleClose}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
                fontSize: '14px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}

            >
             ⚙️ Settings

            </div>
            
            <div
              onClick={handleClose}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#d9534f',
                fontWeight: '500',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
            >
              🚪 Logout
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDropdown;
