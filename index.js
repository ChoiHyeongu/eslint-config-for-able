module.exports = {
  // 이 설정이 프로젝트의 루트에 위치한다는 것을 명시합니다.
  root: true,
  extends: ['eslint:recommended'],
  env: {
    node: true,
  },

  // 규칙들을 설정합니다.
  rules: {
    // 모든 제어 구조에 중괄호 사용을 강제합니다.
    curly: ['error', 'all'],

    // 들여쓰기 깊이를 최대 2단계로 제한합니다.
    'max-depth': ['error', 2],

    // 함수의 파라미터 개수를 최대 3개로 제한합니다.
    'max-params': ['error', 3],

    // 모든 문자열 리터럴에 큰따옴표를 사용하도록 강제하며, 이스케이프가 필요한 경우 예외를 허용합니다.
    quotes: ['error', 'double', {avoidEscape: true}],

    // 후행 쉼표에 대한 규칙을 설정합니다.
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
