import React from 'react';
import AreasButton from './AreasButton';

export default function AreasButtons() {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px", height: "100vh" }}>
            <AreasButton area="Software Engineering" areaInitials="SE" colorHEX="#34B3E4" />
            <AreasButton area="Intelligent Systems" areaInitials="IS" colorHEX="#00FF00" />
            <AreasButton area="Interaction and Visualization" areaInitials="IV" colorHEX="#FF0000" />
            <AreasButton area="Games" areaInitials="G" colorHEX="#0000FF" />
        </div>
    );
}