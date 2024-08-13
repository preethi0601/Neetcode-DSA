/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false
    let hash1 = {}; 
	let hash2 = {}; 

	let left = 0;
	let right = 0;

	for (let char of s1) {
		hash1[char] = hash1[char] + 1 || 1;
	}

	while (right < s2.length) {

		hash2[s2[right]] = hash2[s2[right]] + 1 || 1;
		while (hash2[s2[right]] > (hash1[s2[right]] || 0)) {
			hash2[s2[left]]--; 
			left++;
		}
	if (right - left + 1 === s1.length) return true;

		right++;
	}

	return false;
};