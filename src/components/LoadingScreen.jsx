import { useState, useEffect } from 'react'

export const LoadingScreen = ({ onStart }) => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#F5F2EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            flexDirection: 'column'
        }}>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', marginBottom: '1rem', color: '#4A453E' }}>invalid</h1>
            <button
                onClick={onStart}
                style={{
                    padding: '1rem 3rem',
                    background: 'transparent',
                    border: '1px solid #4A453E',
                    color: '#4A453E',
                    fontFamily: 'Lato, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                Enter Experience
            </button>
        </div>
    )
}
