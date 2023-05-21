#!/bin/bash

echo "Build Script Start"
echo "Build React"
cd frontend
npm ci
npm run build
mv build ..


