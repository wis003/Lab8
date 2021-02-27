const formatVolumeIconPath = require('../assets/scripts/main');

test('formatVolumeIconPath volume > 66', () => {
    expect(formatVolumeIconPath(70)).toMatch(`./assets/media/icons/volume-level-3.svg`);
});

test('formatVolumeIconPath volume > 33', () => {
    expect(formatVolumeIconPath(50)).toMatch(`./assets/media/icons/volume-level-2.svg`);
});

test('formatVolumeIconPath volume > 0', () => {
    expect(formatVolumeIconPath(20)).toMatch(`./assets/media/icons/volume-level-1.svg`);
});

test('formatVolumeIconPath volume <= 0', () => {
    expect(formatVolumeIconPath(0)).toMatch(`./assets/media/icons/volume-level-0.svg`);
});