import {useState} from 'react';
import {render, Box, Text, useInput, useApp} from 'ink';

function App() {
    const {exit} = useApp();
    const [items, setItems] = useState<string[]>([]);
    const [input, setInput] = useState('');

    useInput((char, key) => {
        if (key.ctrl && char === 'c') {
            exit();
            return;
        }

        if (key.return) {
            if (input.trim()) {
                setItems(prev => [...prev, input]);
            }
            setInput('');
            return;
        }

        if (key.backspace || key.delete) {
            setInput(prev => prev.slice(0, -1));
            return;
        }

        if (char) {
            setInput(prev => prev + char);
        }
    });

    return (
        <Box flexDirection="column" gap={1}>
            {items.map((item, index) => (
                <Box key={index} borderStyle="round" paddingX={1}>
                    <Text>{item}</Text>
                </Box>
            ))}
            <Box>
                <Text color="cyan">{'> '}</Text>
                <Text>{input}</Text>
                <Text color="gray">{'█'}</Text>
            </Box>
        </Box>
    );
}

render(<App />);
