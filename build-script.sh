#!/bin/bash

echo "Build Script Start"
echo "Build React"
cd frontend
npm run build
mv build ..


