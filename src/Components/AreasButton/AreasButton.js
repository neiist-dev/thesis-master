import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './AreasButton.css';

export default function AreasButton({ area, areaInitials, colorHEX }) {
    const [on, setOn] = useState(false);
    const [hover, setHover] = useState(false);

    return (
            <OverlayTrigger
                show={hover && on}
                onToggle={(show) => {
                    if (show) {
                        setHover(true);
                    } else {
                        setHover(false);
                    }
                }}
                placement="right"
                overlay={<Tooltip>{area}</Tooltip>}>
                <div>
                    <OverlayTrigger
                        show={hover && !on}
                        onToggle={(show) => {
                            if (show) {
                                setHover(true);
                            } else {
                                setHover(false);
                            }
                        }}
                        placement="right" overlay={<Tooltip>{area}</Tooltip>}>
                        <Button style={{ background: colorHEX, width: on ? "100px" : "55px" }} className="area-btt" onmousehover={() => setHover(true)} onClick={() => setOn(!on)}>{areaInitials}</Button>
                    </OverlayTrigger>
                </div>
            </OverlayTrigger>
    );
}