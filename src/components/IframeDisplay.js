import React from 'react';

class IframeDisplay extends React.Component {
    // ...existing code...

    render() {
        const iframeContainerStyle = {
            // ...existing styles
        };

        return (
            <div style={iframeContainerStyle}>
                <iframe width="1920" height="1080" src="https://lookerstudio.google.com/embed/reporting/c8f1788c-21c5-45ee-97ae-bcb2efa38942/page/vSzfD" frameborder="0" style={{border:0}} allowfullscreen></iframe>
            </div>
        );
    }
}

export default IframeDisplay;
