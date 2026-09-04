---
title: "Stronger Lower Bounds for (Non-)Anytime Acceleration of Gradient Descent"
collection: publications
permalink: /publication/lower-bound-acceleration-GD
date: 2026-09-04
toc: true
toc_sticky: true
authors:
    - Minchan Jung
    - me*
    - CY
venue: ArXiv Preprint
award: 
paperurl: 
arxiv: https://arxiv.org/abs/2609.04032
pdf: https://arxiv.org/pdf/2609.04032
code: 
x: https://x.com/hanseuljo/status/2095755900044919165?s=20
linkedin:
doi: 
scholar: 
categories: 
    - ArXiv
tags:
    - Lower Bounds
    - Acceleration
    - Gradient Descent
---
<!-- markdownlint-disable MD033 -->

## Main Figure

<object data="/assets/img/lower-bound-acceleration-gd/Figure_1_standalone.pdf" width="100%" height="40%" type='application/pdf'></object>

## Abstract

The rate-optimal convergence rate of gradient descent (GD) with a fixed step-size is well known to be $\Theta(N^{-1})$ for $L$-Lipschitz smooth convex objectives in the prior art in convex optimization. Surprisingly, several recent works show that we can accelerate vanilla GD by applying a nonconstant, nonadaptive, deterministic step-size schedule. The best-known **upper bounds** so far in the *non-anytime* & *anytime* setups are $O(N^{-1.271})$ [Altschuler and Parrilo, [2025](https://link.springer.com/article/10.1007/s10107-024-02164-2), Grimmer et al., [2025a](https://pubsonline.informs.org/doi/abs/10.1287/ijoo.2024.0057),[b](https://pubsonline.informs.org/doi/abs/10.1287/moor.2024.0764), Zhang and Jiang, [2026](https://epubs.siam.org/doi/full/10.1137/25M173898X)] and $O(N^{-1.119})$ [Zhang et al., [2025](https://proceedings.mlr.press/v291/zhang25a.html)], respectively. On the other hand, the best reported lower bounds (or barriers) up to date in the *non-anytime* & *anytime* setups are $\Omega(N^{-1.635})$ and $\Omega(N^{-1.241})$ [Ye and Liu, [2026](https://arxiv.org/abs/2609.02855)], respectively. We narrow these gaps by establishing **stronger lower bounds** for GD's convergence rate in both settings: $\Omega(N^{-1.450})$ for the non-anytime rate bound and $\Omega(N^{-1.184})$ for the anytime rate barrier.

## Read the Full Paper

<object data="{{ page.pdf }}" width="960" height="1000" type='application/pdf'></object>
