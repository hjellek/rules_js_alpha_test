import {lpad} from 'package-dep-override';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const string = 'Hello\nWorld!';

const formatted = lpad(string, '    ');

const container = document.getElementById('root');
if (!container) {
    return;
}

const root = createRoot(container);

root.render(
    <StrictMode>
        <h1>Formatted text:</h1>
        <pre>{formatted}</pre>
    </StrictMode>
);
