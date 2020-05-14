import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



// name: CI
// on:
//   pull_request:
//     branches: [dev, master]
//   push:
//     branches: [dev, master]
// jobs:
//   build:
//     runs-on: ubuntu-latest
//     steps:
//       - uses: actions/checkout@v2
//       # - name: Cache node_modules
//       #   uses: actions/cache@v1
//       #   with:
//       #     path: ~/.npm
//       #     key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
//       #     restore-keys: |
//             # ${{ runner.os }}-node-
//       - name: Use NodeJS
//         uses: actions/setup-node@v1
//         with:
//           node-version: '12.x'
//       - run: npm ci
//       # - run: npm run format:check
//       # - run: npm test -- --coverage
//         # env:
//         #   CI: true
//       # - name: Upload Test Coverage
//       #   uses: actions/upload-artifact@v1
//       #   with:
//       #     name: code-coverage
//       #     path: coverage
//       # - name: Build Project
//         # if: github.eventrun build_name == 'push'
//         # run: npm
//       # - name: Upload Build Folder
//       #   if: github.event_name == 'push'
//       #   uses: actions/upload-artifact@v1
//       #   with:
//       #     name: build
//       #     path: build
//       - name: Create a Release
//         if: github.event_name == 'push' && github.ref == 'refs/heads/master'
//         run: npx semantic-release
//         env:
//           GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
//       # - name: Deploy to Staging
//       #   if: github.event_name == 'push'
//       #   run: npx surge --project ./build --domain
//       #     defeated-butter.surge.sh/
//       #   env:
//       #     SURGE_LOGIN: ${{ secrets.SURGE_LOGIN }}
//       #     SURGE_TOKEN: ${{ secrets.SURGE_TOKEN }}
//       # - name: Upload Coverage Reports
//       #   if: github.event_name == 'push' && github.ref == 'refs/heads/master'
//       #   run: npx codecov
//       #   env:
//       #     CODECOV_TOKEN: ${{ secrets.CODECOV_TOKEN}}
//       # - name: Open issue
//       #   if: failure() && github.event_name == 'pull_request'
//       #   run: |
//       #     curl --request POST \
//       #     --url https://api.github.com/repos/${{ github.repository }}/issues \
//       #     --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
//       #     --header 'content-type: application/json' \
//       #     --data '{
//       #       "title": "Automated issue for commit: ${{ github.sha }}",
//       #       "body": "This issue was automatically created by the Github workflow **${{github.workflow}}**. \n\n
//       #         The Commit hash was: _${{ github.sha }}_.",
//       #       "assignees": ["${{ github.event.pull_request.user.login}}"]
//       #     }'
