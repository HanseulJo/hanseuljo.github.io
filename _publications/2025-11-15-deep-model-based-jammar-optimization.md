---
title: "Deep Model-Based Optimization of Jamming Effectiveness under Aircraft AESA Radar Operational Environments"
collection: publications
permalink: /publication/deep-model-based-jammer-optimization
date: 2025-11-15
toc: true
toc_sticky: true
authors:
    - me
    - Baekrok Shin
    - Chaewon Moon
    - Sang-Geun Hong
    - U-Ju Byeon
    - Jin-Yong Sung
    - CY
venue: <a href="https://journal.kics.or.kr"><b>J-KICS</b></a>
award: 
paperurl: https://journal.kics.or.kr/digital-library/103567
arxiv: 
pdf: https://journal.kics.or.kr/digital-library/manuscript/file/103567/01%20조한슬202505-111-A-RU.pdf
code:
categories: 
    - The Journal of Korean Institute of Communications and Information Sciences
tags:
    - Deep Model-Based Optimization
    - Radar Jamming
    - Korean-only
---
<!-- markdownlint-disable MD033 -->

## Korean Title

항공기 AESA 레이다 운용 환경에 효과적인 재머 파라미터 탐색을 위한 심층 모델 기반 최적화 기법

## Abstract (KOR/ENG)

본 연구는 심층 신경망을 이용한 모델 기반 최적화 기법의 일종인 RoMA를 활용해 항공기 AESA 레이다 운용 환경에 효과적인 재머 파라미터를 찾는 알고리즘을 제안한다. 이는 레이다·재머 파라미터와 재밍 효과도 사이 함수를 안정적으로 근사하는 신경망 모델을 사전 학습하는 단계와 이 모델을 활용해 최적 재머 파라미터 후보를 찾는 단계로 나뉜다. 레이다·재머 조우 시나리오에서 얻는 일련의 측정 결과를 단일 지표로 나타내고자 측정 실패율과 평균 거리 오차를 반영하는 재밍 효과도를 정의하고, 운용 환경 모의 시뮬레이션을 반복 시행해 파라미터 조합에 따른 재밍 효과도 데이터 세트를 구축한다. 이를 바탕으로, 무작위 추출 기법 대비 평균 41.2%, 최대 80.3%의 재밍 효과도 향상률을 보였으며, 다른 기준 모델들과의 비교를 통해 본 방법의 우수성을 검증하였다.

We propose a deep learning algorithm to find effective jamming parameters in the aircraft AESA radar operational environment, based on a model-based optimization technique called RoMA. To represent a series of measurements obtained under the operational environment as a single number, we design jamming effectiveness by combining ranging failure rate and average range error. Next, we collect a jamming effectiveness dataset for various radar/jammer parameter combinations by repeatedly running the simulation. Our algorithm consists of two stages: the first is to pre-train a neural network that robustly approximates the function from radar/jammer parameters to jamming effectiveness; the second is to estimate the optimal jamming parameters by exploiting our model. As a result, the proposed method improved jamming effectiveness by an average of 41.2% and up to 80.3% compared to random search, and consistently outperformed other baseline models.

## Keywords

AESA 레이다, 재밍 효과도, 모델링과 시뮬레이션, 모델 기반 최적화, 신경망

AESA Radar, Jamming Effectiveness, Modeling and Simulation, Model-Based Optimization, Neural Network
