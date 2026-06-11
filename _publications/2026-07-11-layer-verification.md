---
title: "Layer Verification Accelerates Speculative Tree Decoding"
collection: publications
permalink: /publication/layer-verification
date: 2026-07-11
toc: true
toc_sticky: true
authors:
    - JC*
    - me*
    - CY
venue: <a href="https://adaptfm.gitlab.io"><b>AdaptFM @ ICML2026</b></a>
award: 
paperurl: https://openreview.net/forum?id=XrqcUo6B6L
arxiv: 
pdf: https://openreview.net/pdf?id=XrqcUo6B6L
code: 
x: 
linkedin:
doi: 
scholar: "0EnyYjriUFMC"
categories: 
    - ICML Workshop
    - AdaptFM
tags:
    - Layer Verification
    - LV
    - Speculative Decoding
    - Tree Speculative Decoding
---
<!-- markdownlint-disable MD033 -->

## Abstract

Autoregressive decoding, a major bottleneck in LLM inference, requires a complete forward pass for each token generation. Speculative decoding mitigates this cost by using a fast draft model to propose multiple candidate tokens and a verifier to accept or correct them, while preserving the target distribution. Token Verification (TV), a common baseline verification method for multi-step drafts, repeatedly applies a single-step verification rule in the sequence direction and stops at the first rejection. However, it is suboptimal even for drafts with a single candidate per step. We propose **Layer Verification (LV)**, a new modular lifting strategy that converts any single-step verification rule into a draft-tree verifier, improving acceptance efficiency over TV. LV assigns appropriate scores to each tree node according to a single-step verification rule, coordinating acceptance mass across nodes within each layer. It then sweeps the draft tree layer by layer, selecting the accepted endpoint and sampling the corrected token. We prove that LV is lossless and preserves the target distribution when the underlying single-step verifier is lossless. Notably, when instantiated with Global Resolution (Thomas & Pal, 2026b), LV attains near-optimal expected acceptance length in both single-step multi-candidate and multi-step single-candidate drafts. Experiments on synthetic autoregressive models and LLM decoding corroborate the efficacy and efficiency of our method.

## Read the Full Paper

<object data="{{ page.pdf }}" width="960" height="1000" type='application/pdf'></object>
