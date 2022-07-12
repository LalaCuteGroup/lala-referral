#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TgBotServiceStack } from '../lib/TgBotServiceStack';
import { DynamoStack } from '../lib/DynamoStack';

const app = new cdk.App();

const dynamoStack = new DynamoStack(app, 'DatabaseStack', {

});

new TgBotServiceStack(app, 'TgBotServiceStack', {
  pingTable: dynamoStack.pingTable,
});

