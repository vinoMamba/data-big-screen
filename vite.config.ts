import {defineConfig} from 'vite';
import {resolve} from "path";
import reactRefresh from '@vitejs/plugin-react-refresh';

const root = process.cwd();

function pathResolve(dir: string) {
    return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
    root,
    resolve: {
        alias: [
            {
                find: /\/@\//,
                replacement: pathResolve("src") + "/"
            }
        ]
    },
    plugins: [reactRefresh()],
    server: {
        host: true,
    },
});
