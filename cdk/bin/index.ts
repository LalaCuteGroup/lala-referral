#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TgBotServiceStack } from '../lib/TgBotServiceStack';
import { DynamoStack } from '../lib/DynamoStack';

const app = new cdk.App();
new TgBotServiceStack(app, 'TgBotServiceStack', {
});

new DynamoStack(app, 'DatabaseStack', {
});
