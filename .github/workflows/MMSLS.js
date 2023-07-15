 */
const MMSLS = [
    
    ""https://www.maimemo.com/share/page?uid=10541224&pid=d93c73d51c1ca60dae26589648d18bc4&tid=8f021a0186c5dabfd8df6253798c561a,
    "",
    "",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
