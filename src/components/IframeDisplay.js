import React from 'react';

class IframeDisplay extends React.Component {
    // ...existing code...

    render() {
        const iframeContainerStyle = {
            // ...existing styles
        };

        return (
            <div style={iframeContainerStyle}>
                <iframe width="1920" height="1080" src="" frameborder="0" style={{border:0}} allowfullscreen></iframe>
            </div>
        );
    }
}

export default IframeDisplay;
