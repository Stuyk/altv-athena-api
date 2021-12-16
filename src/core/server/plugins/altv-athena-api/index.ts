import Fastify from 'fastify';
import * as alt from 'alt-server';

import { PluginSystem } from '../../server/systems/plugins';
import { pathRoot } from './endpoints/root';
import { getAllPlayers } from './endpoints/players/all';
import { getAllVehicles } from './endpoints/vehicles/all';
import { getByName } from './endpoints/players/name';
import { getByDiscord } from './endpoints/players/discord';
import { getAccountByDiscord } from './endpoints/accounts/discord';

const PLUGIN_NAME = 'Athena API';
const app = Fastify({ logger: false });
const port = 9090;

PluginSystem.registerPlugin(PLUGIN_NAME, () => {
    alt.log(`~lg~${PLUGIN_NAME} was Loaded`);

    // Register Endpoints Here
    app.get('/', pathRoot);

    // Account Endpoints
    app.get('/accounts/:discord', getAccountByDiscord);

    // Player Endpoints
    app.get('/players/all', getAllPlayers);
    app.get('/players/name/:name', getByName);
    app.get('/players/discord/:discord', getByDiscord);

    // Vehicle Endpoints
    app.get('/vehicles/all', getAllVehicles);
    app.get('/vehicles/character/:id', getAllVehicles);

    // Start Express Service
    app.listen(9090, () => {
        alt.log(`~m~Express server running on http://localhost:${port}`);
    });
});
