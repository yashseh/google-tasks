import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const scaleFactor = windowWidth / 392;
export const scaledValue = (value = 0) => value * scaleFactor;



export const dim = {
  _0px: scaledValue(0),
  _1px: scaledValue(1),
  _2px: scaledValue(2),
  _3px: scaledValue(3),
  _4px: scaledValue(4),
  _5px: scaledValue(5),
  _6px: scaledValue(6),
  _7px: scaledValue(7),
  _8px: scaledValue(8),
  _10px: scaledValue(10),
  _12px: scaledValue(12),
  _14px: scaledValue(14),
  _16px: scaledValue(16),
  _18px: scaledValue(18),
  _20px: scaledValue(20),
  _22px: scaledValue(22),
  _24px: scaledValue(24),
  _26px: scaledValue(26),
  _28px: scaledValue(28),
  _30px: scaledValue(30),
  _32px: scaledValue(32),
  _34px: scaledValue(34),
  _36px: scaledValue(36),
  _38px: scaledValue(38),
  _40px: scaledValue(40),
  _42px: scaledValue(42),
  _44px: scaledValue(44),
  _46px: scaledValue(46),
  _48px: scaledValue(48),
  _50px: scaledValue(50),
  _52px: scaledValue(52),
  _54px: scaledValue(54),
  _56px: scaledValue(56),
  _58px: scaledValue(58),
  _60px: scaledValue(60),
  _62px: scaledValue(62),
  _64px: scaledValue(64),
  _66px: scaledValue(66),
  _68px: scaledValue(68),
  _70px: scaledValue(70),
  _72px: scaledValue(72),
  _74px: scaledValue(74),
  _76px: scaledValue(76),
  _78px: scaledValue(78),
  _80px: scaledValue(80),
  _82px: scaledValue(82),
  _scale: function _scale(value) {
    return scaledValue(value);
  },

};