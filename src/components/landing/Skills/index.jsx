import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/mobile_dev.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m Jose and I’m a FullStack engineer!" />
			</Thumbnail>
			<Details>
				<h1>About me (short version)</h1>
				<p>
					I'm a big fan of cross platform development, due to that, my main languages are TypeScript, Java and Golang.
					<br /> Thanks to this stack I'm able to develop and cover all areas of an app development.
				</p>
				<p>
					If you are interested in knowing more about me, I'll be glad to talk with you! :)
				</p>
				<Button as={AnchorLink} href="#contact">
					Contact me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
