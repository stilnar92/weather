import React from 'react';
import {Portal} from './Portal'
export const Modal = ({showModal, body, footer, title}) => (
        <div className={`dialog-container${showModal ? '--visible' : ''}`}>
            <div className="dialog">
                {title && <div className="dialog-title">{title}</div>}
                <div className="dialog-body">
                    {body}
                </div>
                <div className="dialog-buttons">
                    {footer}
                </div>
            </div>
        </div>
)


