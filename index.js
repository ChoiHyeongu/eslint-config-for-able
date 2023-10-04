module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  rules: {
    curly: ['error', 'all'],
    // 들여쓰기 깊이 제한
    'max-depth': ['error', 2],
    // 함수의 파라미터 개수 제한
    'max-params': ['error', 3],
    // 함수의 길이 제한
    'max-lines-per-functions': ['error', {max: 10}],
    // 모든 리터럴이 큰따옴표로 사용되게 제한
    quotes: [2, 'double', {avoidEscape: true}],
    // 후행 쉼표 제한
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
  },
};
