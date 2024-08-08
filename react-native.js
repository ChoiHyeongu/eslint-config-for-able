module.exports = {
  // 기본적으로 React 관련 권장 설정을 확장합니다.
  extends: ['plugin:react/recommended', './index.js'],

  // TypeScript를 사용하기 위해서 파서를 설정합니다.
  parser: '@typescript-eslint/parser',

  parserOptions: {
    // 모듈 시스템을 사용할 수 있게 합니다.
    sourceType: 'module',

    // JSX를 사용할 수 있도록 설정합니다.
    ecmaFeatures: {
      jsx: true,
    },

    // ES11 (ES2020)을 사용합니다.
    ecmaVersion: 11,
  },

  plugins: ['react', 'react-hooks', '@react-native-community', 'import'],

  rules: {
    // React 17부터는 JSX에서 React를 자동으로 가져오므로, React를 스코프에 포함하지 않아도 됩니다.
    'react/react-in-jsx-scope': 'off',

    // 여러 줄로 된 항목에서만 후행 쉼표를 허용합니다.
    'comma-dangle': ['error', 'only-multiline'],

    // 사용하지 않는 import를 금지합니다.
    'unused-imports/no-unused-imports': 'error',

    // React hooks의 규칙을 강제합니다.
    'react-hooks/rules-of-hooks': 'error',

    // React hooks의 의존성 배열에 대한 경고를 표시합니다.
    'react-hooks/exhaustive-deps': 'warn',

    // import 정렬 순서를 정의합니다.
    'import/order': [
      'error',
      {
        // import 그룹의 순서를 설정합니다.
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown', 'type'],

        // 특정 경로 패턴의 import를 그룹 내에서 재배치합니다.
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: './src/**',
            group: 'internal',
            position: 'before',
          },
        ],

        // import를 알파벳 순으로 정렬합니다.
        alphabetize: {
          order: 'asc', // 오름차순으로 정렬
          caseInsensitive: false, // 대소문자 구분을 설정
        },

        // import 간에 새로운 줄을 추가합니다.
        'newlines-between': 'always',
      },
    ],
  },
};
