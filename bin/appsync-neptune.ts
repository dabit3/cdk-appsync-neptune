#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AppsyncNeptuneStack } from '../lib/appsync-neptune-stack';

const app = new cdk.App();
new AppsyncNeptuneStack(app, 'NewAppsyncNeptuneStack');
