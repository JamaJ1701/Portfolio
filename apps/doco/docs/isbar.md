---
sidebar_position: 1
slug: isbar
title: ISBAR care handover
authors:
    - name: Jerry Jeong
      title: Jerry
tags: [FHIR, React, MUI]
---

<!-- TODO: Link to application  -->

## Overview

This project was an attempt to utilise [FHIR specification](https://www.hl7.org/fhir/overview.html) during patient handover process based on ISBAR (Introduction, Situation, Background, Assessment, Recommendation) form, which is a standarsation of patient handover process. By implementing the handover form to be used in electronical medical records (EHR), human errors introduced during the handover process was expected to be greatly reduced.

After the research and design phase, proof-of-concept application was developed using React and test FHIR server. The application contains two different versions of ISBAR handover form: simple and complex. Simple version consists of text fields for each sections of ISBAR. This allows users to follow the verbal handover process, catering the need for efficient input and saving time. Complex version requires the users to enter more detailed information with more constraints, while prefilling the fields that are already known.
