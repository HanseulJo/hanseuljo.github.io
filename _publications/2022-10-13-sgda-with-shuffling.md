---
title: "SGDA with shuffling: faster convergence for nonconvex-PŁ minimax optimization"
collection: publications
permalink: /publication/2022-10-13-sgda-with-shuffling
excerpt: 'Hanseul Cho and Chulhee Yun'
date: 2022-10-13
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2210.05995'
#citation: 'Hanseul Cho and Chulhee Yun, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

[Download paper here](https://arxiv.org/abs/2210.05995)

Abstract
---
Stochastic gradient descent-ascent (SGDA) is one of the main workhorses for solving finite-sum minimax optimization problems. Most practical implementations of SGDA randomly reshuffle components and sequentially use them (i.e., without-replacement sampling); however, there are few theoretical results on this approach for minimax algorithms, especially outside the easier-to-analyze (strongly-)monotone setups. To narrow this gap, we study the convergence bounds of SGDA with random reshuffling (SGDA-RR) for smooth nonconvex-nonconcave objectives with Polyak-Łojasiewicz (PŁ) geometry. We analyze both simultaneous and alternating SGDA-RR for nonconvex-PŁ and primal-PŁ-PŁ objectives, and obtain convergence rates faster than with-replacement SGDA. Our rates also extend to mini-batch SGDA-RR, recovering known rates for full-batch gradient descent-ascent (GDA). Lastly, we present a comprehensive lower bound for two-time-scale GDA, which matches the full-batch rate for primal-PŁ-PŁ case.