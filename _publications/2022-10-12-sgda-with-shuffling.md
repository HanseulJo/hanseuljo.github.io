---
title: "SGDA with shuffling: faster convergence for nonconvex-PŁ minimax optimization"
collection: publications
permalink: /publication/sgda-with-shuffling
date: 2022-10-12
authors:
    - me
    - CY
venue: arXiv preprint
award: <b>NAVER Outstanding Theory Paper Award</b> at KAIA-NAVER Joint Conference (2022 Fall)
paperurl: 'https://arxiv.org/abs/2210.05995'
categories: 
    - arXiv
    - KAIA
tags:
    - minimax optimization
    - SGDA
    - without-replacement sampling
    - shuffling-based
---

## Abstract

Stochastic gradient descent-ascent (SGDA) is one of the main workhorses for solving finite-sum minimax optimization problems. Most practical implementations of SGDA randomly reshuffle components and sequentially use them (i.e., without-replacement sampling); however, there are few theoretical results on this approach for minimax algorithms, especially outside the easier-to-analyze (strongly-)monotone setups. To narrow this gap, we study the convergence bounds of SGDA with random reshuffling (SGDA-RR) for smooth nonconvex-nonconcave objectives with Polyak-Łojasiewicz (PŁ) geometry. We analyze both simultaneous and alternating SGDA-RR for nonconvex-PŁ and primal-PŁ-PŁ objectives, and obtain convergence rates faster than with-replacement SGDA. Our rates also extend to mini-batch SGDA-RR, recovering known rates for full-batch gradient descent-ascent (GDA). Lastly, we present a comprehensive lower bound for two-time-scale GDA, which matches the full-batch rate for primal-PŁ-PŁ case.

## Keywords

Stochastic gradient descent-ascent(SGDA), without-replacement sampling, Random reshuffling (RR), SGDA-RR, finite-sum optimization, minimax optimization, nonconvex-PŁ, primal-PŁ-PŁ, convergence analysis
