module.exports = {
  name: 'music-data-access-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/music/data-access-auth',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
