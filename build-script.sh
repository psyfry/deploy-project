#!/bin/bash

echo "Build Script Start"
echo "Remove stale/test builds"
rm build/
echo "Build React"
cd frontend
npm ci
npm run build
mv -f build ..


