import Img1 from "./../resources/img/articles/unnamed.jpg"
import Img2 from "./../resources/img/articles/unnamed-2.jpg"
import Img3 from "./../resources/img/articles/unnamed-3.jpg"
import Img4 from "./../resources/img/articles/unnamed-4.jpg"
import Img5 from "./../resources/img/articles/unnamed-5.jpg"

export const STUDENT_REVIEWS = [
    ["person-outline", "Jim", `thoroughly enjoyed my internship this summer and now have very valuable experience under my belt. I know this will help when looking for jobs and needing references. I was dreading it in the beginning, but now I am so happy it was required. As much as the curriculum changes, I hope that class remains constant`],
    ["person-outline", "Michael", `As I go into the "real world”, having this internship experience was good for me to start out as a professional. I learned the responsibilities of working: being on time, dressing professionally, working hard, and having supervisors is all part of having a job. I am very aware that I will be starting out at the bottom of any company that I work for only to work myself up. I know that I am starting all over and I am looking forward to that.`],
    ["person-outline", "Ethan", `Before I interned I wasn't excited about having to do it but after completing my internship I realized this was probably the best thing Abacus Analysis made me do.  Being able to utilize all the skills that I was taught in a real-life situation is the best learning experience in the world.`]
]
export const Article_SERVICE_REVIEWS = [
    ["person-outline", "Samantha", `I recently used Abacus Analysis to review my resume and was so happy with the results. The team was super helpful and provided some really insightful feedback that helped me to significantly improve the overall quality of my resume. I would definitely recommend Abacus Analysis to anyone looking to give their resume a little boost.`],
    ["person-outline", "Jason", `I was really impressed with the resume review I received from Abacus Analysis. They provided specific and actionable recommendations that helped me tailor my resume to better fit the needs of potential employers. I'm confident that my improved resume will help me stand out in the job market thanks to the help of Abacus Analysis.`],
    ["person-outline", "Emily", `I am extremely satisfied with the resume review I received from Abacus Analysis. The team was able to identify areas of my resume that needed improvement and gave me clear and concise guidance on how to fix them. I would definitely recommend their services to anyone looking to make their resume stand out`],
    ["person-outline", "David", `I was really happy with the level of detail and expertise shown by the team at Abacus Analysis during my resume review. Their feedback was super valuable and helped me craft a resume that really highlights my skills and experience. I would definitely recommend their services to anyone looking to improve their resume.`],
    ["person-outline", "Ashley", `The resume review I received from Abacus Analysis was fantastic. The team provided lots of feedback and suggestions that helped me take my resume to the next level. I'm confident that the improvements made with their guidance will help me stand out in the job market. I would definitely recommend their services to anyone looking to improve their resume.`]
]

export const ARTICLES_TITLES = [
    "An Intro to Multilabel Classification",
    "There's more to Machine learning than you think!",
    "Teach Machines to Paint, Compose, and Write for you!",
    "Generative Adversarial Networks!",
    "Reduce Your Carbon Footprint!"
]

export const ARTICLES_IMAGES = [Img1, Img2, Img3, Img4, Img5]

export const ARTICLES = [
    `<p>The use of artificial intelligence in the workplace is quickly taking off. These models are able to understand, comprehend, and address issues faced by several businesses. Multi-label categorization, where the AI may give an input numerous labels, is one of the newest trends. Instead of focusing on just one element, it may, for instance, classify each animal it can discover in a picture. Such a capability can further reduce the algorithms&apos; already low mistake rate.&nbsp;</p>
    <p>This approach, though, has drawbacks. Working with a model that has a multi-label classification issue increases the likelihood that you may encounter a problem that needs to be fixed. Here are some typical problems you might experience and how to fix them.</p>
    <ol>
        <li><strong>Data Cleaning</strong>: Before feeding data to the model, you must always clean the data. Too many inconsistent or irrelevant variables will simply confuse the AI and lead to inaccurate results. To keep your algorithm effective and &mdash; maybe most crucially &mdash; right, you must adhere to a precise and consistent data-cleansing method. You might have problems while cleaning, though. 
    <br/><strong>Problems: </strong>You can mistakenly delete information you believed to be unimportant or insert a typo that confuses the AI. Each of these problems reduce the data set&apos;s reliability and produce fallacies that could result in expensive business decisions.The simplest method to prevent and fix any issues the team creates when cleaning the data is to adhere strictly to your cleansing procedure. When inspecting and profiling, take your time to determine what information is genuinely relevant or redundant. This can also be used to check for spelling issues that might cause the algorithm to malfunction. Don&apos;t rush the verification process, either. It&apos;s possible that you or another person unintentionally removed an important input, failed to erase extraneous data, or inserted unnecessary white space. Consider this step in the process to be the most important for preventing or fixing problems.</li>
        <br/><li><strong>Label Uncertainty</strong>: As you might expect, numerous labels may be applicable to a single data set. Even if new information might have some similarities, the AI thinks it needs a different set of labels. You are aware that they should be grouped together, though. The system could examine a collection of resumes, making it considerably quicker and easier to evaluate the talent pool. One person is a &quot;great communicator,&quot; while another advertises their &quot;quick response times,&quot; giving each different designations. Too many classifications make your task more difficult and undermine the AI&apos;s goal. <br/><strong>Problems: </strong>Keeping Label Uncertainty Issues at Bay: This problem indicates that the model is becoming very specific. It follows the literal path more frequently than the inferred one since it is a machine. In the prior case, there were two instances of identical statements being made by separate people, which the model mistook for differences. You&apos;ll need to continue training the AI in order to reduce the likelihood of this issue. It must comprehend the connections between the definitions of various nouns. It could be necessary to understand more deeply about unconditional and conditional label dependence so that it can identify situations in which two words or labels have essentially the same meaning. The algorithm will become more efficient by reducing the amount of categories it generates thanks to this method of teaching. Avoid allowing the AI to become too generic throughout this process, while simultaneously ensuring its specificity; label dependence can assist with that.</li>
        <br/><li><strong>Data Imbalance:&nbsp;</strong>A common issue with multi-label categorization is data imbalance. The model won&apos;t learn how to understand other inputs when it concentrates on higher instances of one label. Your model will be negatively trained as a result, and your results will be less precise. Consider a bank that is looking for instances of fraud. The program runs the data through itself and determines that 98% of the transactions were legitimate and 2% were fraudulent. The dominant class is represented by the higher number, and the minority by the lower number. The AI may become biased as a result of the huge majority, making it less likely to identify true cases of fraud, as in the bank example.
        Fixing Data Imbalance Problems Retraining will also be necessary for this issue. The real distribution can be used as a starting point for training, but you should also perhaps take the downsampling and up-weighting processes into account. Consider a set where there is one case of fraud for every 200 purchases for a simpler illustration. This majority class might be downsampled by 20, making the balance one fraudulent transaction for every ten real ones. Next, increase the weight by 20, which provides the model a higher priority for the majority class. By using this method, the AI may handle the urgency of the majority while also seeing the minority class more frequently. By applying the correct ratio of downsampling to up-weighting, poor balancing can be avoided.</li>
    </ol>`
    
    ,

    `
    <p>Machine learning is a rapidly evolving field that has seen numerous advancements in recent years. Some of the most significant developments in the field include:</p>
    <ol>
        <li>
            <p>Deep learning: Deep learning is a type of machine learning that uses artificial neural networks with many layers to learn and make decisions. It has been particularly successful in image and speech recognition tasks and has led to significant advances in areas such as natural language processing and computer vision.</p>
        </li>
        <li>
            <p>Transfer learning: Transfer learning is a machine learning technique that allows a model trained on one task to be fine-tuned and used for a related task. This can be particularly useful in situations where there is limited data available for a specific task, as it allows the model to leverage the knowledge it has gained from other tasks.</p>
        </li>
        <li>
            <p>Reinforcement learning: Reinforcement learning is a type of machine learning that involves an agent learning to interact with an environment in order to maximize a reward. It has been used to develop intelligent systems that can perform tasks such as playing video games and controlling robots.</p>
        </li>
        <li>
            <p>Active learning: Active learning is a machine learning approach in which the model actively selects the data it wants to learn from, rather than being passively fed data by a human. This allows the model to focus on the most informative examples and can lead to more efficient and effective learning.</p>
        </li>
        <li>
            <p>Federated learning: Federated learning is a machine learning approach that allows models to be trained on decentralized datasets, such as those distributed across multiple devices or organizations. This can be particularly useful in situations where data is sensitive or distributed across multiple locations, as it allows models to be trained without the need to centralize the data.</p>
        </li>
        <li>
            <p>Explainable artificial intelligence (XAI): Explainable artificial intelligence is a field that focuses on developing machine learning models that are able to explain their decisions and predictions. This is important in situations where the decisions made by a model have significant consequences, as it allows the model&apos;s reasoning to be understood and evaluated by humans.</p>
        </li>
        <li>
            <p>Adversarial machine learning: Adversarial machine learning is a field that focuses on developing machine learning models that are able to defend against attacks and adversarial examples. Adversarial examples are inputs designed to trick a model into making a mistake, and they can be used to test the robustness and security of machine learning systems.</p>
        </li>
        <li>
            <p>Unsupervised learning: Unsupervised learning is a type of machine learning in which the model is not given any labeled training data. Instead, it must learn to find patterns and relationships in the data on its own. This can be useful in situations where it is difficult or expensive to label the data, such as in natural language processing tasks.</p>
        </li>
        <li>
            <p>Meta-learning: Meta-learning, also known as &quot;learning to learn,&quot; is a machine learning approach in which the model is trained to learn new tasks quickly by adapting to new environments and data. This can be particularly useful in situations where the model needs to learn multiple tasks or adapt to changing environments.</p>
        </li>
    </ol>
    <p>In conclusion, machine learning has seen numerous advancements in recent years, and these developments have had a significant impact on a wide range of industries. From deep learning and transfer learning to reinforcement learning and explainable artificial intelligence, these advances have opened up new possibilities for solving complex problems and have the potential to revolutionize the way we interact with technology.</p>`
    
    ,

    `
<p>Generative deep learning is a type of machine learning that involves using artificial neural networks to generate new, synthetic data that resembles real-world data. It is a subfield of deep learning, which is a type of machine learning that uses artificial neural networks with many layers to learn and make decisions.</p>
<p>There are two main types of generative deep learning models: generative adversarial networks (GANs) and variational autoencoders (VAEs).</p>
<strong>Generative adversarial networks (GANs): </strong>
<p>Generative adversarial networks (GANs) are a type of generative model that involves two neural networks: a generator and a discriminator. The generator is responsible for generating new, synthetic data, while the discriminator is responsible for determining whether the data is real or fake.</p>
<p>The generator and discriminator are trained simultaneously, with the generator attempting to generate synthetic data that is indistinguishable from real data and the discriminator trying to correctly classify the data as real or fake. As the training progresses, the generator and discriminator both improve, with the generator becoming better at generating realistic synthetic data and the discriminator becoming better at distinguishing real data from synthetic data.</p>
<p>One of the key advantages of GANs is their ability to generate high-resolution images and other types of data that closely resemble real-world data. They have been used to generate realistic images of faces, buildings, and other objects, as well as music, text, and other types of data.</p>
<strong>Variational autoencoders (VAEs): </strong>
<p>Variational autoencoders (VAEs) are another type of generative model that involves an encoder and a decoder. The encoder takes in an input data point and maps it to a latent space, which is a lower-dimensional representation of the data. The decoder then takes this latent representation and maps it back to the original data space.</p>
<p>The goal of the VAE is to learn a distribution over the data, such that the encoder and decoder can generate new, synthetic data points that are similar to the original data. To do this, the VAE minimizes the reconstruction error between the input data and the synthetic data generated by the decoder.</p>
<p>One of the key advantages of VAEs is their ability to generate diverse and continuous data. They have been used to generate synthetic images, text, and other types of data, and they have also been used in tasks such as anomaly detection and data imputation.</p>
<strong>Applications of generative deep learning: </strong>
<p>Generative deep learning has a wide range of applications, including:</p>
<ul>
    <li>
        <p>Data augmentation: Generative models can be used to generate synthetic data that can be used to augment existing datasets, allowing models to be trained on larger and more diverse datasets. This can be particularly useful in situations where there is limited real-world data available.</p>
    </li>
    <li>
        <p>Data generation: Generative models can be used to generate synthetic data for tasks such as image synthesis, text generation, and audio synthesis. This can be useful for tasks such as creating realistic images for video games and movies, generating realistic text for chatbots and natural language processing tasks, and synthesizing music and audio for various applications.</p>
    </li>
    <li>
        <p>Anomaly detection: Generative models can be used to identify anomalies in a dataset by comparing the real data to synthetic data generated by the model. If the real data is significantly different from the synthetic data, it may be an anomaly. This can be useful for tasks such as identifying fraudulent transactions in financial data or detecting anomalous behavior in network traffic data.</p>
    </li>
    <li>
        <p>Data imputation: Generative models can be used to fill in missing values in a dataset by generating synthetic data that is similar to the real data.</p>
    </li>
</ul>`

,


`<p>Generative adversarial networks (GANs) are a type of machine learning model that involves two neural networks: a generator and a discriminator. The generator is responsible for generating new, synthetic data, while the discriminator is responsible for determining whether the data is real or fake.</p>
<p>The generator and discriminator are trained simultaneously, with the generator attempting to generate synthetic data that is indistinguishable from real data and the discriminator trying to correctly classify the data as real or fake. As the training progresses, the generator and discriminator both improve, with the generator becoming better at generating realistic synthetic data and the discriminator becoming better at distinguishing real data from synthetic data.</p>
<p>One of the key advantages of GANs is their ability to generate high-resolution images and other types of data that closely resemble real-world data. They have been used to generate realistic images of faces, buildings, and other objects, as well as music, text, and other types of data.</p>
<p>The basic structure of a GAN involves feeding the generator a random noise input, which is then transformed into synthetic data. The discriminator is then fed both the real data and the synthetic data, and it must determine which is which. The generator and discriminator are both optimized using a loss function, with the generator trying to minimize the loss and the discriminator trying to maximize it.</p>
<p>The GAN training process can be broken down into the following steps:</p>
<ol>
    <li>
        <p>The generator takes a random noise input and generates synthetic data.</p>
    </li>
    <li>
        <p>The discriminator is fed both the real data and the synthetic data and must determine which is which.</p>
    </li>
    <li>
        <p>The generator and discriminator are both optimized using a loss function.</p>
    </li>
    <li>
        <p>The process is repeated until the generator is able to generate synthetic data that is indistinguishable from real data.</p>
    </li>
</ol>
<p>There are several variations of GANs, including conditional GANs, which allow the generator and discriminator to learn about a particular class or condition, and encoder-decoder GANs, which use an encoder to map the input data to a latent space and a decoder to map it back to the original data space.</p>
<strong>Applications of GANs: </strong>
<p>GANs have a wide range of applications, including:</p>
<ul>
    <li>
        <p>Image generation: GANs have been used to generate realistic images of faces, buildings, and other objects. They have also been used to create images of objects that do not exist in the real world, such as fantasy creatures and futuristic vehicles.</p>
    </li>
    <li>
        <p>Text generation: GANs have been used to generate synthetic text that is similar to real-world text. They have been used to generate captions for images, create chatbot responses, and generate news articles and other types of text.</p>
    </li>
    <li>
        <p>Music generation: GANs have been used to generate synthetic music that is similar to real-world music. They have been used to generate melodies, drum patterns, and other types of music.</p>
    </li>
    <li>
        <p>Video generation: GANs have been used to generate synthetic videos that are similar to real-world videos. They have been used to generate realistic videos of people talking and moving, as well as videos of objects and landscapes.</p>
    </li>
    <li>
        <p>Anomaly detection: GANs have been used to identify anomalies in a dataset by comparing the real data to synthetic data generated by the model. If the real data is significantly different from the synthetic data, it may be an anomaly. This can be useful for tasks such as identifying fraudulent transactions in financial data or detecting anomalous behavior in network traffic data.</p>
    </li>
    <li>
        <p>Data augmentation: GANs can be used to generate synthetic data that can be used to augment existing datasets, allowing models to be trained on larger and more diverse datasets</p>
    </li>
</ul>`

,

`
<p>Reducing your carbon footprint is the act of minimizing your impact on the environment by reducing the amount of greenhouse gases you produce. These gases, such as carbon dioxide, methane, and nitrous oxide, trap heat in the Earth&apos;s atmosphere and contribute to climate change.</p>
<p>There are many ways to reduce your carbon footprint, and some of the most effective strategies include:</p>
<ol>
    <li>
        <p>Using energy-efficient appliances and products: Energy-efficient appliances, such as LED light bulbs and Energy Star certified appliances, use less energy and produce fewer greenhouse gases than traditional appliances.</p>
    </li>
    <li>
        <p>Driving less: Transportation is a major contributor to greenhouse gas emissions, so reducing the amount you drive can significantly reduce your carbon footprint. Consider using public transportation, carpooling, or walking or biking when possible.</p>
    </li>
    <li>
        <p>Planting trees and supporting reforestation efforts: Trees absorb carbon dioxide from the atmosphere, so planting trees and supporting reforestation efforts can help reduce greenhouse gas concentrations.</p>
    </li>
    <li>
        <p>Eating a plant-based diet: Animal agriculture is a major contributor to greenhouse gas emissions, so transitioning to a plant-based diet can significantly reduce your carbon footprint.</p>
    </li>
    <li>
        <p>Reducing your use of single-use plastics: Single-use plastics, such as plastic bags, water bottles, and straws, are a major contributor to greenhouse gas emissions. Reducing your use of these products and choosing reusable alternatives can help reduce your carbon footprint.</p>
    </li>
    <li>
        <p>Recycling: Recycling reduces the amount of waste that ends up in landfills, where it breaks down and produces methane, a potent greenhouse gas. Recycling can also reduce the amount of resources that are used to produce new products.</p>
    </li>
    <li>
        <p>Supporting clean energy sources: Clean energy sources, such as solar, wind, and hydroelectric power, produce fewer greenhouse gases than fossil fuels. Supporting clean energy initiatives, such as investing in renewable energy or supporting policies that promote clean energy, can help reduce your carbon footprint.</p>
    </li>
    <li>
        <p>Supporting carbon offset programs: Carbon offset programs allow individuals and businesses to offset their carbon emissions by supporting projects that reduce or remove greenhouse gases from the atmosphere. These projects can include reforestation efforts, clean energy initiatives, and methane capture programs.</p>
    </li>
    <li>
        <p>Using fewer products: Consuming fewer products can help reduce your carbon footprint by reducing the amount of resources that are used to produce and transport these products. Consider choosing products that are made from recycled materials and have a long lifespan.</p>
    </li>
    <li>
        <p>Supporting carbon pricing policies: Carbon pricing policies, such as carbon taxes and cap and trade systems, put a price on carbon emissions and provide an economic incentive for individuals and businesses to reduce their greenhouse gas emissions. Supporting these policies can help reduce your carbon footprint.</p>
    </li>
</ol>
<p>In conclusion, there are many ways to reduce your carbon footprint and minimize your impact on the environment. By making small changes in your daily habits and supporting clean energy initiatives and carbon offset programs, you can make a significant difference in the fight against climate change.</p>`
]
    

